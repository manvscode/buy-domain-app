<template>
	<div>
	<div class="row">
	</div>
	<div class="row">
		<div class="col-md-12">
			<div class="jumbotron border">
				<h1 class="display-4">Do you like <span v-html="domain"></span>?  You can buy it!</h1>
				<p class="lead">If you are an interested in owning this domain, please fill out this form.</p>
				<hr class="my-4">

				<section class="col-md-3">
					<div id="consultation-form">
						<div v-if="messageSent">
							<div class="alert alert-success" role="alert">
								Request was received! We will be contacting you soon.
							</div>
						</div>
						<div class="form-group">
							<label for="email">Your Email</label>
							<input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email">
							<small id="emailHelp" class="form-text text-muted">This is the email that we will follow-up with.</small>
						</div>
						<div class="form-group">
							<label for="phone">Your Phone</label>
							<input type="tel" class="form-control" id="phone" aria-describedby="phoneHelp" v-model="phone">
							<small id="phoneHelp" class="form-text text-muted">This is the phone number that we will follow-up with.</small>
						</div>
						<div class="form-group">
							<label for="description">Your Offer</label>
							<input type="text" class="form-control" id="offer" aria-describedby="offerHelp" v-model="offer">
							<small id="offerHelp" class="form-text text-muted">This is your offer in US dollars.</small>
						</div>
						<button type="submit" class="btn btn-primary" @click="requestConsultation($event)">Submit</button>
					</div>
				</section>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'Home',
	data: function() {
		return {
			domain: window.location.host.split(':')[0],
			email: '',
			phone: '',
			offer: '',
			messageSent: false,
		}
	},
	methods: {
		requestConsultation: async function($evt) {
			$evt.preventDefault()

			const getUrl = window.location
			const baseUrl = getUrl.protocol + "//" + getUrl.host + "/"
			//const baseUrl = getUrl.protocol + "//localhost:9000/"

			const response = await fetch(baseUrl + 'api/buy-domain', {
				method: 'POST',
				//mode: 'cors',
				//cache: 'no-cache',
				headers: new Headers({
					'Content-Type': 'application/json',
					'Accept': 'application/json',
				}),
				body: JSON.stringify({
					domain: getUrl.host,
					email: this.email,
					phone: this.phone,
					offer: this.offer,
				}) // body data type must match "Content-Type" header
			});

			if (response.ok) {
				this.messageSent = true
			}

		},
	},
}
</script>

<style>

ul.news-list {
	list-style: none;
	margin: 0 0;
	padding: 0 0;
}
li.news-item {
	border-bottom: 1px solid #5a99a6;
}

.news-date {
	display: block;
	float: left;
	vertical-align: bottom;

}
.news-text {
	vertical-align: center;
}
</style>
