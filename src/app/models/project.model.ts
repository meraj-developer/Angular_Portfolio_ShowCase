export interface IProject
{
    id:number;
    title:string;
    description:string;
    techstack:string[];
    link?:string;
    img:string
}

export interface ILaptopMobileData
{
    product:string;
    price:string;
}