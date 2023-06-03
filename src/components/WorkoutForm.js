export default function WorkoutForm({
										date,
										distance,
										handlerSubmit,
										handlerChangeDate,
										handlerChangeDistance
									}) {
	return (
		<form className="workout-form" onSubmit={handlerSubmit}>
			<input value={date} name="date" type="date"
				   onChange={handlerChangeDate}/>
			<input value={distance} name="distance" type="number" step="0.1"
				   min="0.1"
				   onChange={handlerChangeDistance}/>
			<button type="submit">ОК</button>
		</form>
	)
}
