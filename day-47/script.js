const users = [
    {
        fullName: "Aarav Sharma",
        image: "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "Web Developer",
        description: "Passionate about building clean and responsive websites.",
        tag: "Developer"
    },

    {
        fullName: "Priya Verma",
        image: "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "Graphic Designer",
        description: "Creates modern and aesthetic digital designs.",
        tag: "Designer"
    },

    {
        fullName: "Rohan Singh",
        image: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "Content Writer",
        description: "Writes SEO-friendly and engaging content.",
        tag: "Writer"
    },

    {
        fullName: "Neha Gupta",
        image: "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "Digital Marketer",
        description: "Helps brands grow through social media and ads.",
        tag: "Marketing"
    },

    {
        fullName: "Aditya Kumar",
        image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "App Developer",
        description: "Builds smooth and fast Android/iOS apps.",
        tag: "AppDev"
    }
];

let sum = ''

users.forEach(function(elem){
    sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">

            <h1>${elem.fullName}</h1>
            <h3>${elem.profession}</h3>
            <p>${elem.description}</p>
        </div>`
})

let main = document.querySelector("main")
main.innerHTML = sum