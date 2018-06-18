@foreach($result as $school)
<div class="result-container">
	<div class="bar-container">
		<div class="item">
			<span>{{$school->vote_count}}</span>
			<span>{{$school->school_name}}</span>
		</div>
	</div>
</div>
@endforeach