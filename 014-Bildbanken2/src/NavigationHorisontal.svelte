<script>
	import _ from "lodash"
	export let stack
	export let WIDTH
	const DOT = ' ' + String.fromCharCode(8226) + ' '
	
	function clean(stack){
		const n = stack.length
		let s = ""
		if (n==1) s = stack[0] // Home
		if (n==2) s = stack[1] // 2222
		if (n>=3) s = stack.slice(2).join(DOT)
		s = s.replaceAll(/_M\d+/g,'')
		s = s.replaceAll(/[ _]T\d\d\d\d\d/g,'')
		s = s.replaceAll(/_V\d+/g,'')
		s = s.replaceAll(/_F\d+/g,'') // deprecated
		s = s.replaceAll(/_L\d+/g,'')
		s = s.replaceAll(/_I\d+/g,'')
		s = s.replaceAll(/_R\d+/g,'')
		s = s.replaceAll("_"," ")
		return s
	}

</script>

<div style="width:{WIDTH-1}px">
	<div>
		<span>
			<button title="Current folder" style="width:{WIDTH-1}px">{clean(stack)}</button>
		</span>
	</div>
</div>

<style>
	span {
		flex:1;
		overflow:hidden;
		white-space:nowrap;
	}
	button {
		border:0px;
		background-color:transparent;
		margin:2px;
		height:30px;
		text-align:left;
		flex:1;
		overflow:hidden;
		white-space:nowrap;
	}
</style>
