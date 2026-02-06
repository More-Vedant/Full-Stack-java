export const AxiosData = () => {
    const [axiosData, setAxiosData] = useState([]);

    const getApi = async () => {
        const res = await apiData.get('/products/2');
        const resData = await res.data;
        console.log(resData);
        setAxiosData((prev) => [...prev, resData]);
    };

    console.log(axiosData);

    return (
        <>
        <button onClick={getApi}>click</button>
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3,1fr)',
                gap: '4em',
            }}
            >
                {axiosData.map((el) => {
                    return (
                        <div key={el.id}>
                            <h2>{el.id}</h2>
                            <img width="150" src={el.image} alt=
                            {el.category}/>
                            <h3>{el.title}</h3>
                            <h4>{el.category}</h4>
                            <h4>{el.description}</h4>
                        </div>
                    );
                })}
            </div>
        </>
    );
};