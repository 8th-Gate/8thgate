import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		backgroundColor: "transparent",
	},
	button: {
		marginTop: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
	actionsContainer: {
		marginBottom: theme.spacing(2),
	},
	resetContainer: {
		padding: theme.spacing(3),
	},
}));

function getSteps() {
	return [
		"Web software apps",
		"Mobile software apps",
		"Desktop software apps",
		"Data Analyze",
		" Hosting Services",
		"Security cameras system",
		"Software and hardware purchasing",
		"Software applications",
	];
}

function getStepContent(step) {
	switch (step) {
		case 0:
			return `Our programmers will design and build websitesforour customers with any feature required and will provide technical support after implementation.`;
		case 1:
			return `
Our programmers will design and build android andIOS applicationsfor our customers with any feature required and will provide technical support after implementation.`;
		case 2:
			return `Our programmers will design and build desktop applications and any system for our customers with any feature required and will provide technical support after implementation.`;
		case 3:
			return `Our experts can analyze data and provide our customers with the needed information and recommendation to reach their full potential.`;
		case 4:
			return `Our experts will provide you with the best and most affordable hosting providers.
We can also provide this service on behalf of our clients.`;
		case 5:
			return `We provide your company with security cameras system which is the central part of a surveillance system allowing user to record clear video of the facility or property.`;
		case 6:
			return `Our team’s experts will provide you with the best hardware and software purchases based on your requirements and at affordable prices.`;
		case 7:
			return `Our team will assist you in the development, analysis and testing of your requested web or mobile application after finishing the whole lifecycle.
`;

		default:
			return "Unknown step";
	}
}

export default function VerticalLinearStepperV2() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<div
			className={classes.root}
			style={{ backgroundColor: "transparent" }}>
			<Stepper
				activeStep={activeStep}
				orientation="vertical"
				style={{
					backgroundColor: "transparent",
				}}>
				{steps.map((label, index) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
						<StepContent>
							<Typography style={{ fontSize: "2vh" }}>
								{getStepContent(index)}
							</Typography>
							<div className={classes.actionsContainer}>
								<div>
									<Button
										disabled={activeStep === 0}
										onClick={handleBack}
										className={classes.button}>
										Back
									</Button>
									<Button
										variant="contained"
										color="primary"
										onClick={handleNext}
										className={classes.button}>
										{activeStep === steps.length - 1
											? "Finish"
											: "Next"}
									</Button>
								</div>
							</div>
						</StepContent>
					</Step>
				))}
			</Stepper>
		</div>
	);
}
