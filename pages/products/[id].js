const { default: next } = require("next");

import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from '../components/Layout'
import { motion } from 'framer-motion'

/**
 * Framer Animation
 * animate: defines animation
 * initial: defines the starting point of the animation
 * exit: defines animation when the component exist. 
 */

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .6,
            ease: easing
        }
    }
}

// Stagger
const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
} 

const Product = (props) => (
    <motion.div exit={{opacity: 0}} initial='initial' animate='animate'>
        <Layout>
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                className='half-section'>
                <motion.img 
                    initial={{ x:-200, opcaity: 0 }}
                    animate={{ x:0, opcaity: 1 }}
                    transition={{ delay: 0.2 }}
                    key={props.product.image} 
                    src={props.product.image} 
                    width={350} />
            </motion.div>
            <div className='half-section white'>
                <motion.div className="middle" variants={stagger}>
                    <motion.div variants={fadeInUp}>
                        <Link href='/'>
                            <small>Back to products</small>
                        </Link>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <span className='category'>Protein</span>
                    </motion.div>
                    <motion.h1 variants={fadeInUp}>{props.product.name}</motion.h1>
                    <motion.p variants={fadeInUp}>{props.product.details}</motion.p>
                    <motion.div variants={fadeInUp} className='additonals'>
                        <span>Soy Free</span>
                        <span>Gluten Free</span>
                    </motion.div>
                    <motion.div variants={fadeInUp} className='qty-price'>
                        <div className='qty'>
                            <div className='minus'>-</div>
                            <div className='amount'>1</div>
                            <div className='add'>+</div>
                        </div>
                        <span className='price'>{props.product.price}</span>
                    </motion.div>
                    <motion.div variants={fadeInUp} className='btn-row'>
                        <button className='add-to-cart'> Add to cart</button>
                        <button className='subscribe'> Subscribe</button>
                    </motion.div>
                </motion.div>
            </div>
        </Layout>
    </motion.div>
);

Product.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(
        `http://my-json-server.typicode.com/wrongakram/demo/products/${id}`
    );
    const product = await res.json();
    return { product };
};

export default Product;
