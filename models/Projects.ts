import type { Image } from "./Images";

export interface Project {
    projectTitle: string,
    projectSlug: string,
    projectDescription: string,
    projectTitleImage: Image,
    projectImages: Array<Image>,
}

export interface TattooProject extends Project {
    isTaken: boolean
}