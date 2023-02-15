        		function openIframe() {
			var link = document.getElementById("link").value;
              const n = 11;
              var last = link.substring(link.length - n);
                const terms = ["https://www.youtube-nocookie.com/embed/", last];
                 let final = terms.join("");
			var iframeContainer = document.getElementById("iframe-container");
			iframeContainer.innerHTML = '<iframe src="' + final + '"></iframe>';
		}
