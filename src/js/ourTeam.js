import "../styles/ourTeam.css";

const team = [
  {
    id: 1,
    name: "Monica Watts",
    job: "Web Developer",
    img: "https://images.unsplash.com/photo-1499399244875-59ef3e1347e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a aliquet lorem, ac lacinia erat. Donec finibus elementum velit at tincidunt. Mauris quis lobortis mi. Nulla facilisi. In dui justo, fringilla eget placerat sit amet, laoreet vel quam. Aenean efficitur vestibulum lorem, pellentesque venenatis dolor pulvinar vel. Donec nisi enim.",
  },
  {
    id: 2,
    name: "Pola Blackburn",
    job: "Web Designer",
    img: "https://images.unsplash.com/photo-1564106434126-f0424a4c744b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1288&q=80",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales leo quis turpis pretium aliquam non non dolor. Vestibulum placerat eros nec auctor tristique. Ut ac nunc purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean tincidunt nunc at nunc finibus, sit amet condimentum augue.",
  },
  {
    id: 3,
    name: "Tommie Bradley",
    job: "Intern",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus ligula a volutpat auctor. Cras sed ullamcorper lacus. Proin odio purus, sagittis in euismod sit amet, vestibulum quis neque. Suspendisse a tellus id libero volutpat sodales sed sodales magna. Morbi varius euismod bibendum. Donec sit amet suscipit tortor. Ut sed.",
  },
  {
    id: 4,
    name: "Jayden-James Glass",
    job: "The Big Boss",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt nisi molestie, bibendum mi et, gravida sapien. In euismod sit amet nisl sit amet auctor. Integer finibus, purus id posuere facilisis, lectus ante luctus nisi, quis viverra libero urna id quam. Morbi metus metus, aliquet quis vulputate nec, vehicula a. ",
  },
];

const personImg = document.getElementById("person-img");
const personName = document.getElementById("person-name");
const personJob = document.getElementById("person-job");
const personInfo = document.getElementById("person-info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  const item = team[currentItem];
  personImg.src = item.img;
  personName.textContent = item.name;
  personJob.textContent = item.job;
  personInfo.textContent = item.text;
});

function showPerson(person) {
  const item = team[person];
  personImg.src = item.img;
  personName.textContent = item.name;
  personJob.textContent = item.job;
  personInfo.textContent = item.text;
}

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > team.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = team.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", () => {
  currentItem = randomPerson(team);
  showPerson(currentItem);
});

function randomPerson(arr) {
  let radomItem = Math.floor(Math.random() * arr.length);
  console.log(currentItem);
  console.log(radomItem);
  if (currentItem == radomItem) {
    return randomPerson(arr);
  }
  return radomItem;
}
