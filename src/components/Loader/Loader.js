import { Puff } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className="loading-spinner">
            <Puff
                height="80"
                width="80"
                radius={1}
                color="#3f51b5"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}
export default Loader