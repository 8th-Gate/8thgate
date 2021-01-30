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
		"Network Design",
		"Network Cabling",
		"Network Support",
		"Network Security",
		"Network Configuration",
		"Server Administrator",
		"VOIP (Voice Over IP)",
		"Data security",
	];
}

function getStepContent(step) {
	switch (step) {
		case 0:
			return `Our team will plan the implementation of a computer network infrastructure in order to satisfy data communication requirements and meet the needs of the subscriber.`;
		case 1:
			return "Our team will provide installation, cables testing and maintenance of various network devices..";
		case 2:
			return `Our team will assist you in keeping your organization’s computer network operating correctly. (AP installation, management and maintenance of SolarWinds)`;
		case 3:
			return `We provide various tasks designed to protect the integrity of the network and data such as the installation and management of antivirus systems and firewall systems.`;
		case 4:
			return `Our team will configure and establish the connectivity between network devices (routers, switches andAP).`;
		case 5:
			return `Our team will manage, control and operate your servers and take care of any activity on servers' side (domain servers, web servers...)`;
		case 6:
			return `We provide installation, and maintenance of your VOIP systems and perform numerous tasks such as adding usersorPBX...`;
		case 7:
			return `Our team provides you with solutions to protect your data from unauthorized access or hacking across all applications and platforms through data encryption, hashing and tokenization
`;

		default:
			return "Unknown step";
	}
}

export default function VerticalLinearStepper() {
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
				style={{ backgroundColor: "transparent" }}>
				{steps.map((label, index) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
						<StepContent>
							<Typography>{getStepContent(index)}</Typography>
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
