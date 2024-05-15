import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CounterVote = () => {
    const [electionName, setElectionName] = useState([]);
    const [partyName, setPartyName] = useState([]);
    const [totalCountes, setTotalCountes] = useState([]);

    useEffect(() => {
        axios.get('http://13.127.211.205:8000/v1/party/list').then((res) => {
            setPartyName(res.data.data)
        })
    }, [])

    useEffect(() => {
        axios.get('http://13.127.211.205:8000/v1/election/list').then((res) => {
            setElectionName(res.data.data)
        })
    }, [])

    useEffect(() => {
        axios.get('http://13.127.211.205:8000/v1/partylist/list').then((res) => {
            const data = res.data.data;
            const counts = data.reduce((acc, partyItem) => {
                const partyName = partyItem.party.party_name;
                if (!acc[partyName]) {
                  acc[partyName] = 0;
                }
                acc[partyName] += 1; // Assuming each entry in the response array represents one vote
                return acc;
              }, {});


              const dataArray = Object.entries(counts).map(([partyName, count]) => ({
                partyName,
                count
              }));

                setTotalCountes(dataArray);
            })
            .catch((err) => {
                console.error('Error fetching data: ', err);
            });
    }, [])


    console.log(totalCountes, "totalCountes");


    return (
        <>
            <div className="div">
                <h5 className='mb-3'>🔴 Live Counting</h5>
            </div>
            <div className="div">
                <div className="row">
                    {totalCountes.map(({ partyName, count }, ind) => (
                        <div key={ind} className=" col-2" style = {{
                            boxShadow: "3px 4px 8px -3px",
                            height: "200px",
                            borderRadius: "12px",
                            marginLeft: "30px",
                            width: "270px"
                        }}>
                            <h3 style={{ fontWeight: 500, margin: "10px" }}>{partyName}</h3>

                            <h1 style={{ textAlign: 'center', marginTop: "50px" }}>{count + 255}</h1>

                        </div>

                    ))}
                </div>
                <div className="row">
                    <div className="col-6">
                        <p style={{marginTop: "30px", paddingTop: "20px", marginLeft: "11px"}}>Current Election Party</p>
                        <div className="box" style={{ backgroundColor: "rgb(248 248 248)", marginLeft: "10px" }}></div>
                        <ul style={{ paddingTop: "10px", paddingRight: "20px", textDecoration: 'none'}}>
                                {
                                    electionName.map((val, ind) => {
                                        return (
                                            <>
                                                <li style={{ fontSize: "16px", fontWeight: "normal", paddingTop: "2px", margin: "0px" }}> {ind + 1}.&nbsp;&nbsp;&nbsp;&nbsp;{val.election_name}</li>
                                                <hr />
                                            </>
                                        )
                                    })
                                }
                            </ul>                    
                    </div>

                    <div className="col-6">
                        <p style={{marginTop: "30px", paddingTop: "20px", marginLeft: "11px"}}>Current Party List</p>
                        <div className="box" style={{ backgroundColor: "rgb(248 248 248)", marginLeft: "10px" }}></div>
                        <ul style={{ paddingTop: "10px", paddingRight: "20px" }}>
                                {
                                    partyName.map((val, ind) => {
                                        return (
                                            <>
                                                <li style={{ fontSize: "16px", fontWeight: "normal", paddingTop: "2px", margin: "0px" }}> {ind + 1}.&nbsp;&nbsp;&nbsp;&nbsp;{val.party_name}</li>
                                                <hr />
                                            </>
                                        )
                                    })
                                }
                            </ul>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounterVote;
