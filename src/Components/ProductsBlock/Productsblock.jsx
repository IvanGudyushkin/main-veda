import React from 'react';
import cl from "./ProductsBlock.module.css";

const Productsblock = ({products}) => {
    return (
        <div className={cl.block}>
            <h2 className={cl.title}>Закажи свой астроталисман</h2>
            <div className={cl.content}>
                {products.map((product, index) => (
                    <div key={index} className={cl.item}>
                        {/*<img src={product.img} alt={product.name} className={cl.bg}/>*/}
                        <div className={cl.info}>
                            <h5>{product.name}</h5>
                            <p>{product.description}</p>
                        </div>
                        <button className={cl.button}>
                            подробнее
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Productsblock;