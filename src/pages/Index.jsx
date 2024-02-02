import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";

export function loader() {
    const clientes = [
        {
            id: 1,
            nombre: 'Sofia',
            telefono: 102013313,
            email: "Sofia@gmail.com",
            empresa: 'Empresa 1'
        },
        {
            id: 2,
            nombre: 'Karen',
            telefono: 138198313,
            email: "karen@gmail.com",
            empresa: 'Empresa 2'
        },
        {
            id: 3,
            nombre: 'Josue',
            telefono: 31983913,
            email: "josue@gmail.com",
            empresa: 'Empresa 3'
        },
        {
            id: 4,
            nombre: 'Miguel',
            telefono: 319381983,
            email: "miguel@gmail.com",
            empresa: 'Empresa 4'
        },
        {
            id: 5,
            nombre: 'Pedro',
            telefono: 1398198938,
            email: "pedro@gmail.com",
            empresa: 'Empresa 5'
        },
    ];

    return clientes
}

export default function Index() {

    const clientes = useLoaderData();
    console.log(clientes)

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">clientes</h1>
            <p className="mt-3">Administra tus clientes</p>

            {clientes.length ? (
                <table className="w-full bg-white shadow mt-5 tanle-auto">
                    <thead className="bg-blue-800 text-white">
                        <tr>
                            <th className="p-2">Cliente</th>
                            <th className="p-2">Contacto</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map(cliente => (
                            <Cliente 
                                cliente={cliente}
                                key={cliente.id}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center mt-10">Sin clientes</p>
            )}
        </>
    )
}