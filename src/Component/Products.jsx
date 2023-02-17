import React, { createContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import '../CSS/product.css'
import { Increment } from '../Redux/Reducers/reducer'
import { useDispatch, useSelector } from 'react-redux'
const colors_materials_1='https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products '
const Product_Colors_2='https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colorsProduct'
const Material_3='https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material'
const Featured_Products_4='https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/featured' 
const BEARER_TOKEN='Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo '

function Products() {
    const [data1, setdata1] = useState([])
    const [data2, setdata2] = useState([])
    const [data3, setdata3] = useState([])
    const [data4, setdata4] = useState([])
    //dispatch
    const dispatch=useDispatch()
    const headers={
        'Authorization':`Bearer ${BEARER_TOKEN}`,
        'Content-Type':'application/json'
    }
    const[hover,sethover]=useState(false)

    const shopproduct =() => {
            axios.all([
            axios.get(colors_materials_1,{   
                headers          
            }),
            axios.get(Material_3,{ //product color api problem...not call
                headers 
            }),
            axios.get(Material_3,{
                headers  
            }),
            axios.get(Featured_Products_4,{
                headers 
            })
        ]).then(axios.spread((res1,res2,res3,res4)=>{
            setdata1(res1.data.products)
            setdata2(res2.data)
            setdata3(res3.data)
            setdata4(res4.data.featured)
        })).catch(()=>{
            console.log("errrrrrror")
        })
    }
    useEffect(() => {
        shopproduct()
       console.log(data1)
    }, [])
    const filter=()=>{

    }
    return (
        <>
        {/* <h1>{JSON.stringify(data4)}</h1>  Featured_Products--is empty no images */}
            <div className="products">
                {
                    data1.map((e, i) => (
                        <div key={i} className="product-cart" >
                            <div className="card" style={{ width: '40rem' }} >
                               <img src={e.image} style={{}} width={218} height={550} onMouseOver={(i)=>sethover( true)}  className="card-img-top image-fluid" alt="Card-image" />
                             {
                                hover ?<span onMouseOut={(i)=>sethover(false)} className='cart-btn-outlet' ><button onClick={()=>dispatch(Increment())} className='cart-btn' >Add To Cart</button></span> : null
                             }
                                <div className="card-body">
                                    <p className="card-text fs-1">{e.name}</p>
                                    <span className='colorname fs-3'>Black</span><br /><br />
                                    <span className='fs-2'>{e.price}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )

}

export default Products