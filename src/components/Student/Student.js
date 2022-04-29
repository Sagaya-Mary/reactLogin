import React, { Component } from 'react';
import './Student.css';

const students = [{
    id: 1,
    name: "Brendan",
    age: 15,
    points: 5
}, {
    id: 2,
    name: "John",
    age: 17,
    points: 5
},
{
    id: 3,
    name: "Alireza",
    age: 26,
    points: 5

}];

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            ave: 0
        }

    }
    countLessThan18Age = () => {
        var fil = students.filter(function (ele) {
            var sum = ele.age > 18;
            return sum;
        });
        this.setState({
            count: fil.length
        })
    }
    average = () => {
        let avgs = students.reduce((ac, a) => a.points + ac, 0) / students.length
        this.setState({
            ave: avgs
        })
    }
    // tableRows = students.map(
    //     (element) => {
    //         return (

    //             <tr>
    //                 <td>{element.id}</td>
    //                 <td>{element.name}</td>
    //                 <td>{element.age}</td>
    //                 <td>{element.points}</td>
    //             </tr>

    //         )
    //     }
    // )
    render() {
        return (


            <div className='boundary'>
                <div className='form'>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((list, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{list.id}</td>
                                            <td>{list.name}</td>
                                            <td>{list.age}</td>
                                            <td>{list.points}</td>
                                        </tr>
                                    )
                                })
                            }
                            {/* <tr>
                                {this.tableRows}
                           </tr> */}
                        </tbody>
                    </table>
                    <h1>count of above 18 age students: {this.state.count}</h1>
                    <button type='button' className='btn' onClick={() => { this.countLessThan18Age() }}>count</button>
                    <h1>Average of the points: {this.state.ave}</h1>
                    <button type='button' className='btn' onClick={() => { this.average() }}>average</button>
                </div>

            </div>
        );
    }
}
export default Student;