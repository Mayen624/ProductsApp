//Class

class Product {
    constructor(name, price, year){
       this.name = name;
       this.price = price;
       this.year = year;
    }
}

class UI {
    addProduct(product){
        const listProducts = document.getElementById('lits-products');
        const divProduct = document.createElement('div');
        divProduct.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Name:</strong> ${product.name}
                    <strong>Price:</strong> ${product.price}
                    <strong>Year:</strong> ${product.year}
                    &nbsp;&nbsp;    
                    <a href="#" class="btn btn-danger" name="remove">
                        X
                    </a>
                </div>
            </div>
        `;

        listProducts.appendChild(divProduct);
        this.resetForm();

    }

    deleteProduct(item){
        if(item.name === 'remove'){
            item.parentElement.parentElement.remove();
            this.showMessage('Product removed successfully.', 'warning');
        }
    }

    resetForm(){
        document.getElementById('products-form').reset();
    }

    showMessage(text,className){
        const alert = document.createElement('div');
        alert.className = `alert alert-${className}`;
        alert.appendChild(document.createTextNode(text));
        const divContainer = document.querySelector('.container');
        const divRow = document.querySelector('.row');
        divContainer.insertBefore(alert,divRow);
        setTimeout(function (){
            document.querySelector('.alert').remove();
        },3000)
    }
}

//DOOM

const formProducts = document.getElementById('products-form');

formProducts.addEventListener('submit', function(e){

    e.preventDefault();

    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let year = document.getElementById('year').value;

    const ui = new UI();

    if(name == '' || price == '' || year == ''){
        return ui.showMessage("Empty spaces are not allowed.", 'danger');
    }

    const product = new Product(name,price,year);
    ui.addProduct(product);
    ui.showMessage('Pruduct added successfully.', 'success');
    
})

document.getElementById('lits-products').addEventListener('click', ((e) => {
    const ui = new UI();
    ui.deleteProduct(e.target);
}))
