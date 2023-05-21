{
    let createProduct = function(){
        let productForm = $('#new-product-form');

        productForm.submit(function(evt){
            evt.preventDefault();

            $.ajax({
                type: 'post',
                url: '/api/v0/products/create',
                data: productForm.serialize(),
                success: function(data){
                    let newProduct = newProductDOM(data.data.product);
                    $('#products-list').append(newProduct);

                    deleteProduct($('.delete-product-button', newProduct), data.data.product._id);
    
                    $('#product-name').val('');
                    $('#product-qty').val('');
                },
                error: function(err){
                    console.log(err.responseText);
                }
            })
        })
    }

    let newProductDOM = function(product){
        return $(`
            <li id="product-${product._id}">
                <p>
                    <div>
                        ${product._id}
                    </div>
                    <div id="product-${product._id}-name">
                        ${product.name}
                    </div>
                    <div id="product-${product._id}-quantity">
                        ${product.quantity}
                    </div>
                    <a class="delete-product-button" href="/api/v0/products/${product._id}">Delete</a>
                </p>
            </li>
        `);
    }

    let deleteProduct = function(deleteLink, product_id){
        $(deleteLink).click(function(evt){
            evt.preventDefault();

            $.ajax({
                type:'delete',
                url:$(deleteLink).prop('href'),
                success: function(data){
                    $(`#product-${product_id}`).remove();
                },
                error: function(error){
                    console.log(error.responseText);
                }
            })
        });
    }

    let updateProducts = function(){
        let updateForm = $('#update-product-form');

        updateForm.submit(function(evt){
            evt.preventDefault();

            let productId = $('#update-product-id').val();
            let productQty = $('#update-product-qty').val();

            $.ajax({
                type: 'post',
                url: `/api/v0/products/${productId}/update_quantity?quantity=${productQty}`,
                success: function(data){
                    $(`#product-${productId}-quantity`).html(productQty);
    
                    $('#update-product-id').val('');
                    $('#update-product-qty').val('');
                },
                error: function(err){
                    console.log(err.responseText);
                }
            })
        })
    }

    function populateProducts(){
        $.ajax({
            type: 'get',
            url: '/api/v0/products',
            success: function(data){
                for(product of data.data.products){
                    let productDOM = newProductDOM(product);
                    $('#products-list').append(productDOM);

                    deleteProduct($('.delete-product-button', productDOM), product._id);
                }
            },
            error: function(err){
                console.log(err.responseText);
            }
        })
    }

    populateProducts();
    createProduct();
    updateProducts();
}