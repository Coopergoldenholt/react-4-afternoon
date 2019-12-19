import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import History from "../History/History";
import Contact from "../Contact/Contact";

export default class About extends Component {
	render() {
		return (
			<div>
				<div className="subnav">
					<Link className="subnav_links" to="/about">
						{" "}
						<h3>About</h3>
					</Link>
					<Link className="subnav_links" to="/about/history">
						<h3>History</h3>
					</Link>
					<Link className="subnav_links" to="/about/contact">
						<h3>Contact</h3>
					</Link>
				</div>
				<Switch className="box">
					<Route path="/about/history" component={History} />
					<Route path="/about/contact" component={Contact} />
					<Route
						exact
						path="/about"
						render={() => (
							<div>
								<h1>About the University</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Mauris quis imperdiet orci, vel euismod lacus. Donec placerat,
									nibh ac commodo posuere, eros nibh scelerisque lectus, in
									auctor leo risus ultricies ligula. Phasellus vel auctor justo,
									eu maximus tortor. Nam odio tortor, condimentum non auctor eu,
									pellentesque vel mi. Suspendisse vitae euismod nisl. In
									ultricies, purus vitae tincidunt convallis, urna magna iaculis
									magna, in scelerisque enim ex non libero. Aenean dictum lacus
									non leo faucibus viverra. Suspendisse potenti. Phasellus nisl
									ligula, luctus ut finibus at, suscipit et erat. Proin a lectus
									sit amet est interdum pulvinar at ac neque. Ut scelerisque
									odio fermentum, vulputate elit ac, vehicula libero.
									Suspendisse eu justo vel justo porta viverra sed nec sapien.
									Nam tellus sapien, vulputate eget lacinia nec, condimentum ut
									nisi. Donec sed rhoncus nisi, sed elementum ex. Mauris in
									consequat turpis, vel vestibulum mi. Morbi egestas tellus vel
									nisl elementum, id sagittis mauris aliquam. Donec ut arcu
									viverra quam laoreet tempor. Vivamus facilisis lacinia velit
									quis placerat. Nulla mattis sem eu mattis pretium. Suspendisse
									convallis a quam at tempor. Etiam mauris mauris, pretium vitae
									odio id, tincidunt aliquet augue. Sed condimentum eleifend
									ante, vitae aliquet velit aliquam in. Sed at quam tellus. Sed
									ac nisl vel nunc hendrerit tristique eu quis lectus. Ut auctor
									sem ex, sed scelerisque elit egestas id. Phasellus eleifend
									pellentesque consectetur. Sed nec dolor vestibulum, interdum
									justo ornare, porttitor dui. Vestibulum condimentum fermentum
									pellentesque. Quisque ac risus convallis, venenatis elit eu,
									elementum metus. Nullam a diam ac sem varius feugiat. Mauris
									lorem nunc, scelerisque ac lorem in, fringilla finibus felis.
									Sed vestibulum felis elit, id euismod est viverra vitae. Donec
									condimentum odio vel bibendum blandit. Donec dignissim congue
									ipsum vel vehicula. Suspendisse potenti. Phasellus sed nisi
									tellus. Class aptent taciti sociosqu ad litora torquent per
									conubia nostra, per inceptos himenaeos. Ut vitae elit sit amet
									libero consectetur lacinia vel eget lectus. Morbi tempor
									auctor interdum. Praesent rhoncus congue arcu, eget interdum
									diam lacinia at. Orci varius natoque penatibus et magnis dis
									parturient montes, nascetur ridiculus mus. Duis sed diam id
									sapien rhoncus elementum sit amet sed lacus. Suspendisse eget
									suscipit orci, rhoncus pharetra ipsum. Sed consequat tellus ut
									purus hendrerit, nec finibus justo aliquet. Pellentesque
									tincidunt felis non purus suscipit mollis. Quisque eget quam
									dui. Phasellus aliquet felis sem, non rutrum enim sagittis
									nec. Nunc non nunc non diam condimentum efficitur.
									Pellentesque habitant morbi tristique senectus et netus et
									malesuada fames ac turpis egestas. Donec porttitor sagittis
									vulputate. Vivamus feugiat risus ac feugiat blandit. Phasellus
									vel commodo libero. Aliquam odio enim, convallis vel orci a,
									interdum scelerisque orci. Nullam ut enim vel mi eleifend
									gravida. Quisque et diam posuere, maximus ante at, tristique
									sem. Maecenas sapien purus, ultrices vitae imperdiet vel,
									eleifend eu nunc.
								</p>
							</div>
						)}
					/>
				</Switch>
			</div>
		);
	}
}
