export interface IProject
{
    id:number;
    title:string;
    description:string;
    techstack:string[];
    link?:string;
    img:string
}

export interface ILaptopData
{
    product:string;
    price:string;
    image:string
}

export interface IMobileData
{
    product:string;
    price:string;
    image:string;
}