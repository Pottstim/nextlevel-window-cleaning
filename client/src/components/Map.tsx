/**
 * GOOGLE MAPS COMPONENT — Next Level Window Cleaning
 * 
 * Loads Google Maps directly using your own API key.
 * 
 * SETUP:
 * 1. Get a Google Maps API key from https://console.cloud.google.com/apis/credentials
 * 2. Enable "Maps JavaScript API" in your Google Cloud project
 * 3. Set VITE_GOOGLE_MAPS_API_KEY in Cloudflare Pages environment variables
 * 
 * USAGE FROM PARENT COMPONENT:
 * const mapRef = useRef<google.maps.Map | null>(null);
 *
 * <MapView
 *   initialCenter={{ lat: 35.4795, lng: -79.1797 }}  // Sanford, NC
 *   initialZoom={13}
 *   onMapReady={(map) => {
 *     mapRef.current = map;
 *   }}
 * />
 */

/// <reference types="@types/google.maps" />

import { useEffect, useRef } from "react";
import { usePersistFn } from "@/hooks/usePersistFn";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    google?: typeof google;
    initGoogleMaps?: () => void;
  }
}

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

// Track if script is loading/loaded
let isLoading = false;
let isLoaded = false;
const callbacks: Array<() => void> = [];

function loadGoogleMapsScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Already loaded
    if (isLoaded && window.google?.maps) {
      resolve();
      return;
    }

    // Currently loading - wait for it
    if (isLoading) {
      callbacks.push(() => resolve());
      return;
    }

    if (!API_KEY) {
      console.error("VITE_GOOGLE_MAPS_API_KEY is not set");
      reject(new Error("Google Maps API key not configured"));
      return;
    }

    isLoading = true;

    // Create a unique callback name
    const callbackName = "initGoogleMaps";
    window[callbackName] = () => {
      isLoaded = true;
      isLoading = false;
      callbacks.forEach(cb => cb());
      callbacks.length = 0;
      resolve();
    };

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=weekly&libraries=marker,places,geocoding&callback=${callbackName}`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      isLoading = false;
      reject(new Error("Failed to load Google Maps"));
    };
    document.head.appendChild(script);
  });
}

interface MapViewProps {
  className?: string;
  initialCenter?: google.maps.LatLngLiteral;
  initialZoom?: number;
  onMapReady?: (map: google.maps.Map) => void;
  /** Optional: Add a marker at this location */
  markerPosition?: google.maps.LatLngLiteral;
  /** Optional: Marker title */
  markerTitle?: string;
}

export function MapView({
  className,
  initialCenter = { lat: 35.4795, lng: -79.1797 }, // Sanford, NC
  initialZoom = 13,
  onMapReady,
  markerPosition,
  markerTitle = "Next Level Window Cleaning",
}: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);
  const marker = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);

  const init = usePersistFn(async () => {
    try {
      await loadGoogleMapsScript();
      
      if (!mapContainer.current) {
        console.error("Map container not found");
        return;
      }

      // Create map
      map.current = new window.google.maps.Map(mapContainer.current, {
        zoom: initialZoom,
        center: initialCenter,
        mapTypeControl: true,
        fullscreenControl: true,
        zoomControl: true,
        streetViewControl: true,
        mapId: "next_level_windows_map",
      });

      // Add marker if position provided
      if (markerPosition && window.google.maps.marker) {
        const { AdvancedMarkerElement } = window.google.maps.marker;
        marker.current = new AdvancedMarkerElement({
          map: map.current,
          position: markerPosition,
          title: markerTitle,
        });
      }

      if (onMapReady) {
        onMapReady(map.current);
      }
    } catch (err) {
      console.error("Failed to initialize map:", err);
    }
  });

  useEffect(() => {
    init();
  }, [init]);

  return (
    <div ref={mapContainer} className={cn("w-full h-[500px]", className)} />
  );
}
