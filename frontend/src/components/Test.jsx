import React from "react";
import { BarChart, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer } from "recharts";

const data = [
    { month: "Jan", achats: 4000 },
    { month: "Fév", achats: 3000 },
    { month: "Mar", achats: 5000 },
    { month: "Avr", achats: 7000 },
    { month: "Mai", achats: 2000 },
    { month: "Juin", achats: 8000 },
    { month: "Juil", achats: 6000 },
    { month: "Août", achats: 4000 },
    { month: "Sep", achats: 5000 },
    { month: "Oct", achats: 7000 },
    { month: "Nov", achats: 3000 },
    { month: "Déc", achats: 9000 }
];

const GraphAchatsMois = () => {
    return (
        <div className="container-fluid" style={{margin: "16px 24px !important"}}>
            <div className="row">
                {/* Colonne du BarChart */}
                <div className="col-md-6">
                    <div className="tw-h-80 tw-p-4 tw-bg-gray-100 tw-shadow-md tw-rounded-md tw-m-2">
                        <h2 className="tw-text-lg tw-font-semibold tw-mb-3 tw-text-center">Achats par Mois</h2>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="achats" fill="#4A90E2" barSize={20} radius={[5, 5, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Colonne du LineChart */}
                <div className="col-md-6">
                    <div className="tw-h-80 tw-p-4 tw-bg-gray-100 tw-shadow-md tw-rounded-md tw-m-2">
                        <h2 className="tw-text-lg tw-font-semibold tw-mb-3 tw-text-center">Achats par Mois</h2>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="achats" stroke="#4A90E2" strokeWidth={2} dot={{ r: 4 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default GraphAchatsMois;












// <div className="tw-w-full tw-h-80 tw-p-4 tw-bg-gray-100 tw-shadow-md tw-rounded-md">
//           <h2 className="tw-text-lg tw-font-semibold tw-mb-3 tw-text-center">Achats par Mois</h2>
//           <ResponsiveContainer width="50%" height="100%">
//             <LineChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="achats" type="monotone" barSize={40} radius={[5, 5, 0, 0]} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>