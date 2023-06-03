import WorkoutList from './WorkoutList';
import WorkoutForm from './WorkoutForm';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function Workout() {
	const [date, setDate] = useState('')
	const [distance, setDistance] = useState('')
	const [trainings, setTrainings] = useState([])

	const onAddTraining = (training) => {
		const matchTrainingIndex = trainings.findIndex(
			(item) => Date.parse(item.date) === Date.parse(training.date)
		)
		if (matchTrainingIndex >= 0) {
			training.distance = Number.parseFloat(trainings[matchTrainingIndex].distance)
				+ Number.parseFloat(training.distance)
			trainings.splice(matchTrainingIndex, 1)
		}
		setTrainings(trainings => [...trainings, training].sort((a, b) => {
			const dateA = Date.parse(a.date)
			const dateB = Date.parse(b.date)
			if (dateA < dateB) return -1
			if (dateA > dateB) return 1
			return 0
		}))
	}
	const onRemoveTraining = (trainingId) => {
		setTrainings(trainings.filter((training) => training.id !== trainingId))
	}
	const onEditTraining = (trainingId) => {
		const [matchTraining] = trainings.splice(
			trainings.findIndex((training) => training.id === trainingId), 1
		)
		setDate(matchTraining.date)
		setDistance(matchTraining.distance)
	}

	const handlerChangeDate = (event) => {
		setDate(event.target.value)
	}
	const handlerChangeDistance = (event) => {
		setDistance(event.target.value)
	}
	const handlerSubmit = (event) => {
		event.preventDefault()
		if (date === '') return
		onAddTraining({
			id: nanoid(),
			date,
			distance
		})
		setDate('')
		setDistance('')
	}
	return (
		<div className="workout">
			<WorkoutForm date={date} distance={distance}
						 handlerChangeDate={handlerChangeDate}
						 handlerChangeDistance={handlerChangeDistance}
						 handlerSubmit={handlerSubmit}/>
			<WorkoutList trainings={trainings} onRemoveTraining={onRemoveTraining}
						 onEditTraining={onEditTraining}/>
		</div>
	)
}
