let users = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
    },
    {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
    },
];

// adding user card to web page
const parentContainer = document.getElementById("parent_container");
function display(user) {

    const card = document.createElement("div");
    card.setAttribute("class", "card");

    card.innerHTML = `
    
    <p><b>id:</b>  <span>${user.id}</span></p>
    <p><b>name:</b> <span>${user.name}</span></p>
    <p><b>username:</b>  <span>${user.username}</span></p>
    <p><b>email:</b>  <span>${user.email}</span></p>
    <button class="add-to-cart" onclick="addToCart(${user.id})">cart</button>
`;
    parentContainer.append(card);
}

users.forEach((user) => {
    display(user);
})

function addToCart(userId) {

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const user1 = users.find((P) => P.id === userId);

    const userInCart = cart.find((item) => item.id === userId);

    if(userInCart){
        userInCart.quantity++
    }
    else{
        cart.push({...user1,quantity : 1});
    }

    localStorage.setItem("cart",JSON.stringify(cart));

    
}