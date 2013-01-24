(function(gizmo) {
	/**
	 * Плагин для AJAX на iframe.
	 *
	 * @constructor
	 * @param {object} O
	 * @param {string} O.action        Путь к скрипту-обрабочику.
	 * @param {string} O.id            id формы.
	 * @param {function} O.onSubmit    Функция обработчик для события отправки.
	 * @param {function} O.onComlete   Функция обработчик ответа скрипта.
	 * @this {gizmo.ajax.iframeAJAX}
	 * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
	 * @version 0.1
	 */
 
	var ajax = gizmo.Class({
		construct: function(O) {
			this.action = O.action;
			this.formId = O.id;
			this.onSubmit = O.onSubmit;
			this.onComplete = O.onComplete;
			this.createIframe();
			this.createForm();
		},
		vars: {
			formId: '',
			form: {},
			iframe: {},
			onSubmit: function() {},
			onComplete: function() {}
			
		},
		methods: {
			/**
			* Creates iframe with unique name
			*/
			createForm: function(){
				var form = document.getElementById(this.formId);
				form.action = this.action;
				form.target = this.iframeName;
				form.enctype = "multipart/form-data";
				form.method = "POST";
				this.form = form;
			},
			createIframe: function(){
				var name = 'rFrame';
				this.iframeName = name;
				
				// create iframe, so we dont need to refresh page
				var iframe = document.createElement('iframe');
					iframe.name = name;
					iframe.style.display = 'none';
				var body = document.getElementsByTagName('body')[0];
					body.appendChild(iframe);
				this.iframe = iframe;

			},
			send: function(){
				if(this.onSubmit() !== false){
					this.form.submit();
					return true;
				} else {
					return false;
				}
			}
		}
	});

    gizmo.Plugins['iframeAJAX'] = {
        name: "iframeAJAX",
        version: 0.1,
        author: "Alexander Lizin aka Sogimu",
        email: "sogimu@nxt.ru",
        description: "Плагин для AJAX на iframe"
    };

	gizmo.iframeAjax = ajax;

}(gizmo));