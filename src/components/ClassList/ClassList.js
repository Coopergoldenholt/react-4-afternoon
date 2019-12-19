import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ClassList extends Component {
	constructor() {
		super();
		this.state = {
			students: []
		};
	}
	componentDidMount() {
		axios
			.get(
				`http://localhost:3005/students?class=${this.props.match.params.class}`
			)
			.then(res => {
				this.setState({
					students: res.data
				});
			});
	}

	render() {
		let studentNames = this.state.students.map((ele, index) => {
			return (
				<Link to={`/student/${ele.id}`} key={index}>
					{" "}
					<h3>
						{ele.first_name} {ele.last_name}
					</h3>
				</Link>
			);
		});
		console.log(this.props);
		return (
			<div className="box">
				<h1>{this.props.match.params.class}</h1>
				<h2>ClassList:</h2>
				{studentNames}
				<Link to="/">
					<button>Take Me Back</button>
				</Link>
			</div>
		);
	}
}
