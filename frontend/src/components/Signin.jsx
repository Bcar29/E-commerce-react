import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signin() {

    const [password, setPassword] = useState('')
    const [ifocus, setIfcous] = useState(false)

    const error = password.length < 8 && ifocus ? <span className="tw-text-red-500 tw-mt-0 tw-italic tw-text-xs">entrer un mot de pass de 8 caractère</span> : ''

    const isDisabled = password.length < 8 ? false : true

    const butConnexion = isDisabled ? <button type="submit" className="tw-bg-green-600 tw-py-1.5 hover:tw-bg-green-700 tw-ring-2 tw-text-zinc-50 tw-text-2xl tw-border-zinc-50 tw-rounded"  >Connexion</button> : <button type="submit" className="tw-bg-gray-500 tw-py-1.5 tw-text-zinc-50 tw-text-2xl tw-border-zinc-50 tw-rounded" disabled={true} >Connexion</button>

    // const error = password.length < 8 && (<span className="tw-text-red-400 tw-mt-0 tw-italic tw-text-xs">entrer un mot de pass de 8 caractère</span>)

    return (

        <div className="tw-bg-gradient-to-br tw-from-purple-500 tw-to-violet-700 tw-w-full tw-my-2 tw-p-4" >

            <div className="tw-p-3 tw-w-2/5 tw-mx-auto  tw-rounded  tw-shadow-lg tw-shadow-slate-900 tw-border-slate-900 tw-bg-slate-900">
                <h3 className="tw-text-center tw-text-zinc-50 tw-italic">Veuillez vous <span className="tw-text-blue-600 fs-2">connectez</span></h3>
                <form action="" className="tw-flex tw-flex-col tw-w-auto tw-gap-4" method="post">
                    <input type="email" name="email" placeholder="Entrer votre addresse mail" className="tw-p-2.5 tw-border tw-border-slate-950 tw-rounded" />
                    <input type="password" name="password" placeholder="Entrer un mot de pass" className="tw-p-2.5 tw-border tw-border-slate-950 tw-rounded" onChange={(e) => setPassword(e.target.value)} onFocus={() => setIfcous(true)} onBlur={() => setIfcous(false)} />
                    {error}
                    {butConnexion}
                    {/* <button type="submit" className="tw-bg-green-600 tw-py-1.5 hover:tw-bg-green-700 tw-text-zinc-50 tw-text-2xl tw-border-zinc-50 tw-rounded" >Connexion</button> */}
                    <p className="tw-text-white tw-text-center tw-italic">Vous n'avez pas de compte ? <Link to="/signup">s'inscrire</Link> </p>
                </form>
            </div>
        </div>
    )
}