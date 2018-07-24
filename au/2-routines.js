function makeInput(target,tag,obj) {
	// console.log(tgt);
	var t = document.createElement(tag);
	for (var key in obj) {
		if(obj.hasOwnProperty(key)) {
			if(!key.localeCompare('label') && obj[key]) {
				let lt = document.createTextNode( obj[key] );
				let l = document.createElement('label');
				l.appendChild(lt);
				l.setAttribute("for",obj[key]);
				target.appendChild(l);				
			}
			else if (!key.localeCompare('text') && obj[key]) {
				let txt = document.createTextNode( obj[key] );
				//let l = document.createElement('label');
				//l.appendChild(lt);
				//l.setAttribute("for",obj[key]);
				t.appendChild(txt);	
			}
			else {
				t.setAttribute(key, obj[key]);
			}
			// console.log (key+": "+obj[key]); 
		}
	}
	target.appendChild(t);
	return t;
}