import { Link } from "react-router-dom";
import { useState } from "react";


export default function Signup() {


        const [password1, setPassword1] = useState('')
        const [password2, setPassword2] = useState('')
        const [ifocus, setIfcous] = useState(false)
    
        const errorlen = password1.length < 8 && ifocus ? <span className="tw-text-yellow-500 tw-mt-0 tw-italic tw-text-xs">entrer un mot de pass de 8 caractère</span> : ''
        const errorconf = password1 !== password2 ? <span className="tw-text-yellow-500 tw-mt-0 tw-italic tw-text-xs">entrer deux mot de pass  identique </span> : ''
        const isDisabled = password1.length < 8  || password1 !== password2    ? false : true
    
        const butConnexion = isDisabled ? <button type="submit" className="tw-bg-green-600 tw-py-1.5 hover:tw-bg-green-700 tw-ring-2 tw-ring-slate-50 tw-text-zinc-50 tw-text-2xl tw-border-zinc-50 tw-rounded"  >S'inscrire</button> : <button type="submit" className="tw-bg-gray-500 tw-py-1.5 tw-text-zinc-50 tw-text-2xl tw-border-zinc-50 tw-rounded tw-ring-2 tw-ring-red-300" disabled={true} >S'inscrire</button>



    return (
        <div className="tw-bg-gradient-to-br tw-from-cyan-500 tw-to-slate-950 tw-w-full tw-my-2 tw-p-4" >

            <div className="tw-p-3 tw-w-2/5 tw-mx-auto  tw-rounded  tw-shadow-lg tw-shadow-blue-900 tw-border-slate-900 tw-bg-slate-900">
                <h3 className="tw-text-center tw-text-zinc-50 tw-italic">Veuillez vous <span className="tw-text-blue-600 fs-2">inscrire</span></h3>
                <form action="" className="tw-flex tw-flex-col tw-w-auto tw-gap-4" method="post">
                    <input type="email" name="email" placeholder="Entrer votre addresse mail" className="tw-p-2.5 tw-border tw-border-slate-950 tw-rounded" />
                    <input type="password" name="password" placeholder="Entrer un mot de pass" className="tw-p-2.5 tw-border tw-border-slate-950 tw-rounded" onChange={(e) => setPassword1(e.target.value)} onFocus={() => setIfcous(true)} onBlur={() => setIfcous(false)}/>
                    {errorlen}
                    <input type="password" name="password" placeholder="vueillez confirmer le mot de pass" className="tw-p-2.5 tw-border tw-border-slate-950 tw-rounded" onChange={(e) => setPassword2(e.target.value)}/>
                    {errorconf}
                    {butConnexion}
                    <p className="tw-text-white tw-text-center tw-italic">Avez vous déja un Compte ? <Link to="/signin">Login</Link> </p>
                </form>
            </div>
        </div>
    )

}