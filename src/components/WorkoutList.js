import WorkoutItem from './WorkoutItem';

export default function WorkoutList({trainings = [], onRemoveTraining, onEditTraining}) {
	return (
		<table className='workout-list'>
			<thead>
			<tr>
				<th>Дата (ДД.ММ.ГГ)</th>
				<th>Пройдено, км</th>
				<th>Действия</th>
			</tr>
			</thead>
			<tbody>
			{trainings.map((item) => (
				<WorkoutItem key={item.id} item={item}
							 onRemoveTraining={onRemoveTraining}
							 onEditTraining={onEditTraining}/>
			))}
			</tbody>
		</table>
	)
}
