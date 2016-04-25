(function() {
	var mergeMsg = document.getElementsByClassName('merge-message')[0];
	var mergeMsgParent = mergeMsg.parentNode;

	var commitsCounter = document.getElementById('commits_tab_counter');
	var multipleCommits = commitsCounter.innerHTML.trim() !== '1';

	if (multipleCommits) {

		mergeMsg.setAttribute("style", "-webkit-filter: grayscale(); opacity: 0.25;");

		var squashMsg = document.createElement("div");
		squashMsg.className = "branch-action-item";
		squashMsg.style.background = "#bd2c00";
		squashMsg.style.color = "#FFF";

		var squashMsgContent =
			"<div class='branch-action-item-icon completeness-indicator completeness-indicator-error'>" +
				"<svg aria-hidden='true' class='octicon octicon-x' height='16' role='img' version='1.1' viewBox='0 0 12 16' width='12'><path d='M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z'></path></svg>" +
		    "</div>" +
			"<h4 class='status-heading'>Don't forget to squash your commits</h4>" +
			"<span class='status-meta'><code>git rebase -i</code> on the command line</span>";

		squashMsg.innerHTML = squashMsgContent;

		var completenessIndicator = squashMsg.getElementsByClassName('completeness-indicator-error')[0];
		completenessIndicator.style.background = "#FFF";
		completenessIndicator.style.color = "#bd2c00";

		var statusMeta = squashMsg.getElementsByClassName('status-meta')[0];
		statusMeta.style.color = "wheat";

		mergeMsgParent.insertBefore(squashMsg, mergeMsg);
	}
})()
