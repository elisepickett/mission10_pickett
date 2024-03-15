import { useEffect, useState } from "react";
import { Bowler } from "../types/OneBowler";

function BowlingList() {
    const [bowlingData, setBowlingData] = useState<Bowler[]>([]);
  
    useEffect(() => {
      const fetchBowlingData = async () => {
        const rsp = await fetch('http://localhost:5143/api/Bowling');
        const b = await rsp.json();
        setBowlingData(b);
      };
      fetchBowlingData();
    }, []);
  
    return (
      <>
        <div className="row">
          <h4 className="text-center">Best Bowlers</h4>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Bowler Name</th>
              <th>Team Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {bowlingData.map((b) => (
              <tr key={b.bowlerId}>
                <td>
                  {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
                </td>
                <td>{b.teamName}</td>
                <td>{b.bowlerAddress}</td>
                <td>{b.bowlerCity}</td>
                <td>{b.bowlerState}</td>
                <td>{b.bowlerZip}</td>
                <td>{b.bowlerPhoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
  
  export default BowlingList;