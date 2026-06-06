import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import GetEstimate from "./pages/GetEstimate";
import OurWork from "./pages/OurWork";
import Residential from "./pages/Residential";
import ResidentialWindowCleaning from "./pages/ResidentialWindowCleaning";
import ResidentialPressureWashing from "./pages/ResidentialPressureWashing";
import ResidentialSoftWashing from "./pages/ResidentialSoftWashing";
import ResidentialChristmasLights from "./pages/ResidentialChristmasLights";
import ResidentialGutterCleaning from "./pages/ResidentialGutterCleaning";
import Commercial from "./pages/Commercial";
import ServiceAreas from "./pages/ServiceAreas";
import SanfordNC from "./pages/SanfordNC";
import CameronNC from "./pages/CameronNC";
import SpringLakeNC from "./pages/SpringLakeNC";
import BroadwayNC from "./pages/BroadwayNC";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import SeasonalCalendarGuide from "./pages/SeasonalCalendarGuide";
import SoftWashingGuide from "./pages/SoftWashingGuide";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path="/get-a-free-estimate" component={GetEstimate} />
      <Route path="/our-work" component={OurWork} />
      <Route path="/residential" component={Residential} />
      <Route path="/residential/window-cleaning" component={ResidentialWindowCleaning} />
      <Route path="/residential/pressure-washing" component={ResidentialPressureWashing} />
      <Route path="/residential/soft-washing" component={ResidentialSoftWashing} />
      <Route path="/residential/christmas-lights" component={ResidentialChristmasLights} />
              <Route path="/residential/gutter-cleaning" component={ResidentialGutterCleaning} />
      <Route path="/commercial" component={Commercial} />
      <Route path="/service-areas" component={ServiceAreas} />
      <Route path="/service-areas/sanford-nc" component={SanfordNC} />
      <Route path="/service-areas/cameron-nc" component={CameronNC} />
      <Route path="/service-areas/spring-lake-nc" component={SpringLakeNC} />
      <Route path="/service-areas/broadway-nc" component={BroadwayNC} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/guides/seasonal-cleaning-calendar-nc" component={SeasonalCalendarGuide} />
      <Route path="/guides/soft-washing-vs-pressure-washing" component={SoftWashingGuide} />
      <Route path="/guides" component={SeasonalCalendarGuide} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
