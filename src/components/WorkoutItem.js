export default function WorkoutItem({ item, onRemoveTraining, onEditTraining }) {
	const date = new Date(item.date).toLocaleDateString('ru')
	return (
		<tr>
			<td>{date}</td>
			<td>{item.distance}</td>
			<td>
				<span className="material-symbols-outlined"
					  onClick={() => onEditTraining(item.id)}>edit</span>
				<span className="material-symbols-outlined"
					  onClick={() => onRemoveTraining(item.id)}>delete</span>
			</td>
		</tr>
	)
}
