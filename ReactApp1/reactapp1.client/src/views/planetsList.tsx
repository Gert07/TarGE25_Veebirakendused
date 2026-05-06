import { useCallback, useEffect, useState } from "react";
import type { Planets } from "../Types/types";
//import { useNavigate } from "react-router-dom";

function PlanetsList() {
    const [planets, setPlanets] = useState<Planets[]>([]);
    //const navigate = useNavigate();

    //Loob ühenduse controlleriga ja toob kõik planeedid
    const fetchPlanets = useCallback(async () => {
        try {
            const response = await fetch("/api/planets");
            if (response.ok) {
                const data = await response.json();
                setPlanets(data);
            }
        } catch (error) {
            console.error("Error fetching planets:", error);
        }
    }, []);

    useEffect(() => {
        (async () => {
            await fetchPlanets();
        })();
    }, [fetchPlanets]);

    return (
        <div className='container'>
            <h1>Planet list</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Types</th>
                    </tr>
                </thead>
                <tbody>
                    {planets.length > 0 ? (
                        planets.map((planet) => (
                            <tr key={planet.planetsId}>
                                <td>{planet.planetsId}</td>
                                <td>{planet.name}</td>
                                <td>{planet.type}</td>
                                <td>
                                    Siia teha nupp detaili vaatesse, mis suunab detailvaatesse ja näitab planeedi kõiki andmeid
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td>Loading planets..</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
  );
}

export default PlanetsList;