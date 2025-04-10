import React from "react";
import { BarChart, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer } from "recharts";
import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

import dayjs from "dayjs";
import "dayjs/locale/fr";
dayjs.locale("fr");

const GraphAchatsMois = () => {
    const { orders } = useContext(OrderContext)
    // 1. Calculer les montants groupés par mois (ex: mar, avr)
    const montantParMois = orders.reduce((acc, commande) => {
        const moisBrut = dayjs(commande.ordered_date).format("MMM"); // ex: "mar", "avr"
        const mois = moisBrut.charAt(0).toUpperCase() + moisBrut.slice(1); // Capitaliser
        acc[mois] = (acc[mois] || 0) + commande.montant;
        return acc;
    }, {});

    // 2. Convertir en tableau pour Recharts
    const dataMois = Object.entries(montantParMois).map(([mois, montant]) => ({
        mois,
        montant,
    }));


    console.log(orders)

    // 1. Grouper les montants par ville
    const montantParVille = orders.reduce((acc, commande) => {
        const ville = commande.shippingaddress?.ville || "Inconnue";
        acc[ville] = (acc[ville] || 0) + commande.montant;
        return acc;
    }, {});

    // 2. Transformer en tableau compatible avec Recharts
    const dataVille = Object.entries(montantParVille).map(([ville, montant]) => ({
        ville,
        montant,
    }));

    return (
        <div className="container-fluid" style={{ margin: "16px 24px !important" }}>
            <div className="row">
                {/* Colonne du BarChart */}
                <div className="col-md-6">
                    <div className="tw-h-80 tw-p-4 tw-bg-gray-100 tw-shadow-md tw-rounded-md tw-m-2">
                        <h2 className="tw-text-lg tw-font-semibold tw-mb-3 tw-text-center">Achats par Mois</h2>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={dataMois}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                                <XAxis dataKey="mois" />
                                <YAxis />
                                <Tooltip contentStyle={{ backgroundColor: "#1e293b", color: "#fff", borderRadius: "8px" }}/>
                                <Bar dataKey="montant" fill="#4A90E2" barSize={20} radius={[5, 5, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Colonne du LineChart */}
                <div className="col-md-6">
                    <div className="tw-h-80 tw-p-4 tw-bg-gray-100 tw-shadow-md tw-rounded-md tw-m-2">
                        <h2 className="tw-text-lg tw-font-semibold tw-mb-3 tw-text-center">Achats par Ville</h2>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={dataVille}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                                <XAxis dataKey="ville" />
                                <YAxis />
                                <Tooltip contentStyle={{ backgroundColor: "#1e293b", color: "#fff", borderRadius: "8px" }}/>
                                <Line type="monotone" dataKey="montant" stroke="#4A90E2" strokeWidth={2} dot={{ r: 4 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default GraphAchatsMois;








