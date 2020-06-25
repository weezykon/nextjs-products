import Link from "next/link";
import fetch from "isomorphic-unfetch";
import globalStyles from './styles/global'
import Layout from './components/Layout'
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

const Index = (props) => (
    <motion.div exit={{opacity: 0}} initial='initial' animate='animate'>
        <Layout>
            <div className='title'>
                <h1>Select a protein</h1>
            </div>
            <motion.div variants={stagger} className='product-row'>
                {props.products.map(product => (
                    <Link
                        key={product.id}
                        href='/products/[id]'
                        as={`/products/${product.id}`}>
                        <motion.div
                            whileHover={{ scale: 1 }}
                            whileTap={{ scale: 1.10 }}

                            variants={fadeInUp} 
                            className='card'>
                            <span className='category'>Protein</span>
                            <motion.img 
                                initial={{ x:60, opcaity: 0 }}
                                animate={{ x:0, opcaity: 1 }}
                                transition={{ delay: .2 }}
                                key={product.image} 
                                src={product.image} 
                                width={250} />
                            <div className='product-info'>
                                <h4>{product.name}</h4>
                                <span>{product.price}</span>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </motion.div>
        </Layout>
        <style jsx global>
            {globalStyles}
        </style>
    </motion.div>
);

Index.getInitialProps = async function () {
    const res = await fetch(
        "http://my-json-server.typicode.com/wrongakram/demo/products"
    );
    const data = await res.json();
    return {
        products: data
    };
};

export default Index;
