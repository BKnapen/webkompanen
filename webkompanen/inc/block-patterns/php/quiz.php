<?php
$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
/**
 * CTA column left: h1 title column right: lead text button + span text + button
 */
ob_start();
?>
<!-- 
	wp:webkompanen-blocks/section 
	{
		"classes":"bg-secondary spacer-y-3"
	} 
-->
<section class="bg-secondary spacer-y-3">	
	<!--
		wp:webkompanen-blocks/container 
		{
			"classes":"container"
		} 
	-->
  	<div class="container">
		<!-- 
			wp:webkompanen-blocks/div 
			{
				"classes":"quiz"
			} 
		-->
		<div class="quiz">	
			<!-- 
				wp:webkompanen-blocks/div 
				{
					"classes":"question-container"
				} 
			-->
			<div class="question-container">
				<!-- 
					wp:webkompanen-blocks/form 
					{
						"role":"form",
						"classes":"answer-form",
						"name":"answer-form",
						"answer":"optie 2"
					} 
				-->
    			<form name="answer-form" class="answer-form" data-answer="optie 2">
      				<!-- 
						wp:webkompanen-blocks/div 
						{
							"classes":"form-check"
						}
					-->
					<div class="form-check">
						<!-- 
							wp:webkompanen-blocks/input 
							{
								"type":"radio",
								"name":"flexRadioDefault",
								"id":"flexRadioDefault1",
								"value":"optie 1"
							} 
						-->
  						<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" data-value="optie 1" />
						<!-- /wp:webkompanen-blocks/input -->
						<!-- 
							wp:webkompanen-blocks/label 
							{
								"classes":"form-check-label",
								"for":"flexRadioDefault1",
								"content":"Optie 1"
							} 
						-->
  						<label class="form-check-label" for="flexRadioDefault1" data-name="Optie 1">
							Optie 1
  						</label>
						<!-- /wp:webkompanen-blocks/label -->
					</div>
    				<!-- /wp:webkompanen-blocks/div -->
      				<!-- 
						wp:webkompanen-blocks/div 
						{
							"classes":"form-check"
						}
					-->
					<div class="form-check">
						<!-- 
							wp:webkompanen-blocks/input 
							{
								"type":"radio",
								"name":"flexRadioDefault",
								"id":"flexRadioDefault2",
								"value":"optie 2"
							} 
						-->
  						<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" data-value="optie 2" />
						<!-- /wp:webkompanen-blocks/input -->
						<!-- 
							wp:webkompanen-blocks/label 
							{
								"classes":"form-check-label",
								"for":"flexRadioDefault2",
								"content":"Optie 2"
							} 
						-->
  						<label class="form-check-label" for="flexRadioDefault2" data-name="Optie 2">
							Optie 2
  						</label>
						<!-- /wp:webkompanen-blocks/label -->
					</div>
    				<!-- /wp:webkompanen-blocks/div -->
      				<!-- 
						wp:webkompanen-blocks/div 
						{
							"classes":"form-check"
						}
					-->
					<div class="form-check">
						<!-- 
							wp:webkompanen-blocks/input 
							{
								"type":"radio",
								"name":"flexRadioDefault",
								"id":"flexRadioDefault3",
								"value":"optie 3"
							} 
						-->
  						<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" data-value="optie 3" />
						<!-- /wp:webkompanen-blocks/input -->
						<!-- 
							wp:webkompanen-blocks/label 
							{
								"classes":"form-check-label",
								"for":"flexRadioDefault3",
								"content":"Optie 3"
							} 
						-->
  						<label class="form-check-label" for="flexRadioDefault3" data-name="Optie 3">
							Optie 3
  						</label>
						<!-- /wp:webkompanen-blocks/label -->
					</div>
    				<!-- /wp:webkompanen-blocks/div -->
					<!-- 
						wp:webkompanen-blocks/button 
						{
							"color":"primary",
							"type":"submit",
							"content":"volgende"
						}
					-->
					<button class="btn btn-primary" type="submit">volgende</button>
					<!-- /wp:webkompanen-blocks/button -->
				</form>
    			<!-- /wp:webkompanen-blocks/form -->
			</div>
    		<!-- /wp:webkompanen-blocks/div -->
		</div>
    	<!-- /wp:webkompanen-blocks/div -->
	</div>
	<!-- /wp:webkompanen-blocks/container -->
</section>
<!-- /wp:webkompanen-blocks/section -->
<?php
$output = ob_get_contents();
ob_clean();
return array(
	'title'      => __( 'Quiz', 'webkompanen' ),
	'categories' => array( 'quiz' ),
	'blockTypes' => array( 'webcompanen/template-part/quiz' ),
	'content'    => $output
);