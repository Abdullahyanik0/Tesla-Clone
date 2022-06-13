import modelSimage from "./image/ModelS.jpg"
import model3image from "./image/Model3.jpg"
import modelXimage from "./image/ModelX.jpg"
import modelYimage from "./image/ModelY.jpg"
import SolarRoofimage from "./image/SolarRoof.jpg"
import SolarPanelsimage from "./image/SolarPanels.jpg"

const car = [
  {
    title: "Model X",
    image: modelXimage,
    
  },
  {
    title: "Model 3",
    image: model3image
  },
  {
    title: "Model S",
    image: modelSimage
  },
  {
    title: "Model Y",
    image: modelYimage
  },
  {
    title: "Solar Roof",
    image: SolarRoofimage
  },
  {
    title: "Solar Panels",
    image: SolarPanelsimage
  }
];
export function getInvoices() {
  return car ;
}
