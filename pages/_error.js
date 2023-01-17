import Layout from '../components/Layout'

const _error = ({statusCode}) => {
    return (<Layout>
        <h1>{statusCode}</h1>
        <p className='text-center'>
            Could not load your page 
        </p>
    </Layout>) 
}

export default _error