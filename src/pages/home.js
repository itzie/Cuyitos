import React, { Component } from "react";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Heart from '@material-ui/icons/Favorite'

const bbCuyito = require('../assets/bb-cuyito.png');



export class home extends Component {

		render() {
			return (
			<div className="content-box">
				<div className="welcome-banner">
					<h4 className="welcome-label">
						Welcome!
					</h4>
				</div>
				<h3 className="description-title">Welcome to Cuyito Spotting!</h3>
				<h3 className="description-text">
					The internet's cutest and fluffiest community of guinea pig fans and owners. Share your critters' cutest pics and join a loving community today!
				</h3>
				<div className="top-piggies">
					<h3 className="top-piggies-label">Top Pigies of the Week</h3>
				</div>
				<div className="cards-wrapper">
					<Grid container spacing={10}>
						<Grid item xs={4}>
							<Paper className="cuyito-cards">
								<img src={bbCuyito} className="bb-cuyito-img" alt={"cuyito-bb"}/>
								<h4 className="cuyito-name-title">Cute bb # 1</h4>
								<h4 className="cuyito-likes-count">
									87645 likes
									<Heart className="heart-icon" fontSize="large"/>
								</h4>
							</Paper>
						</Grid>
						<Grid item xs={4}>
							<Paper className="cuyito-cards">
								<img src={bbCuyito} className="bb-cuyito-img" alt={"cuyito-bb"}/>
								<h4 className="cuyito-name-title">Cute bb # 2</h4>
								<h4 className="cuyito-likes-count">
									87645 likes
									<Heart className="heart-icon" fontSize="large"/>
								</h4>
							</Paper>
						</Grid>
						<Grid item xs={4}>
							<Paper className="cuyito-cards">
								<img src={bbCuyito} className="bb-cuyito-img" alt={"cuyito-bb"}/>
								<h4 className="cuyito-name-title">Cute bb # 3</h4>
								<h4 className="cuyito-likes-count">
									87645 likes
									<Heart className="heart-icon" fontSize="large"/>
								</h4>
							</Paper>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}

export default home