
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useMyProducts from '../../hooks/useMyProducts';
import AddProduct from '../AddProduct/AddProduct';
import Items from "../ManageInventory/Items";

const MyItems = () => {
    const [myProducts, setMyProducts] = useMyProducts();

    const handleDelete = (id) => {
        const url = `http://localhost:5000/view/${id}`;
        const askToSure = window.confirm("Are You Sure?");
        if (askToSure) {
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount === 1) {
                        toast.success('Product Successfully Deleted!', {
                            style: {
                                border: '1px solid #4ade80',
                                padding: '16px',
                                color: '#14532d',
                            },
                            iconTheme: {
                                primary: '#14532d',
                                secondary: '#FFFAEE',
                            },
                        });
                        const restProduct = myProducts.filter(
                            (product) => product._id !== id
                        );
                        setMyProducts(restProduct);
                    } else {
                        toast.error("Ops! Something Went Wrong")
                    }
                });
        }  };

        return (
            <div className="md:w-3/4 mx-auto mt-6">
                <h2 className="text-3xl font-bold text-center mb-4">
                    Products Uploaded By You
                </h2>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Supplier
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {myProducts.map((product) => (
                                <Items key={product._id} product={product} handleDelete={handleDelete}></Items>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Link className="w-full bg-green-400 text-center block py-2 rounded mt-6 font-2xl hover:bg-green-700 hover:text-white" to={'/add'}>Add More Product</Link>
            </div>
        );
  
                            }
 export default MyItems;