import { Injectable } from '@angular/core';
import { ILaptopData, IMobileData, IProject } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  public projects:IProject[] = 
  [
    {
      id:1,
      title:'Portfolio Website',
      description: 'This is my personal portfolio website built with Angular. It highlights my skills, projects, and professional experience. The design is clean, modern, and fully responsive. Angular components and routing make navigation smooth. It serves as my online identity to showcase my work.',
      techstack: ['Angular','typescript','Bootstrap'],
      img:'assets/portfolio.jpg'
    },
    {
      id:2,
      title:'E-Commerce App',
      description: 'This is a fully functional e-commerce application built with Angular. It allows users to browse, search, and purchase products easily. The app includes features like a shopping cart and product filters. It uses Angular components and services for smooth performance.',
      techstack:['Angular','Node.js','MongoDB'],
      img:'assets/ecommerce.jpg'
    },
    {
      id:3,
      title:'Task Manager',
      description: 'This is a task manager application built with Angular. It helps users create, update, and delete daily tasks easily. The app includes features like task status tracking and filtering. It uses Angular components and services for efficient performance. The goal is to help users.',
      techstack:['Angular'],
      img:'assets/taskmanager.jpg'
    }
  ]

  public laptopData:ILaptopData[] = 
  [
    {
      product:'Dell Laptop',
      price:'₹45,000',
      image:'assets/laptop.jpg'
    },
        {
      product:'Acer Laptop',
      price:'₹40,000',
      image:'assets/laptop2.jpg'
    },
        {
      product:'HP Laptop',
      price:'₹50,000',
      image:'assets/laptop3.jpg'
    },
        {
      product:'ASUS Laptop',
      price:'₹60,000',
      image:'assets/laptop4.jpg'
    }
  ]

  public mobileData:IMobileData[] = 
  [
    {
      product:'IPhone Mobile',
      price:'₹70,000',
      image:'assets/mobile2.jpg'
    },
    {
      product:'Samsung Mobile',
      price:'₹40,000',
      image:'assets/mobile5.mp4'
    },
    {
      product:'Realme Mobile',
      price:'₹10,000',
      image:'assets/mobile4.mp4'
    },
    {
      product:'Motorolla Mobile',
      price:'₹15,000',
      image:'assets/mobile7.jpg'
    }
  ]

  getMobileData():IMobileData[]
  {
    return this.mobileData
  }

  getLaptopData():ILaptopData[]
  {
    return this.laptopData
  }

  getProject():IProject[]
  {
    return this.projects
  }
}
