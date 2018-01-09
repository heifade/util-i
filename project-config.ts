import { ProjectConfigModel } from "./src/model/projectConfig/ProjectConfigModel";
import { CompileModel } from "./src/model/projectConfig/CompileModel";

let projectConfig: ProjectConfigModel = {
  projectType: "node",
  compile: [
    {
      outDir: "./es/",
      module: "ESNext",
      target: "ES5",
      declaration: true,
    },
    {
      outDir: "./lib/",
      module: "amd",
      target: "ES5",
      declaration: true,
    }
  ],
  command: false,
  documents: true,
  
  sourceInclude: ["./src/**/*"]
};

export default projectConfig;
