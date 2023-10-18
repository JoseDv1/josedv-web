<script>
	const FechaActual = new Date().getTime();
	const FechaCumple = new Date(2003, 9, 4).getTime();
	let edad = Math.floor(
		(FechaActual - FechaCumple) / (1000 * 60 * 60 * 24 * 365.25)
	);
</script>

<span>{edad} <A:tel />ños</span>
