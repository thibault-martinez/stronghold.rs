(function() {var implementors = {};
implementors["iota_stronghold"] = [{"text":"impl ActorFactoryArgs&lt;ClientId&gt; for Client","synthetic":false,"types":[]},{"text":"impl ActorFactoryArgs&lt;ClientId&gt; for InternalActor&lt;Provider&gt;","synthetic":false,"types":[]}];
implementors["stronghold_communication"] = [{"text":"impl&lt;Req, Res, ClientMsg, P&gt; ActorFactoryArgs&lt;(Keypair, CommunicationActorConfig&lt;ClientMsg&gt;, BehaviourConfig)&gt; for CommunicationActor&lt;Req, Res, ClientMsg, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Req: MessageEvent + ToPermissionVariants&lt;P&gt; + Into&lt;ClientMsg&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Res: MessageEvent,<br>&nbsp;&nbsp;&nbsp;&nbsp;ClientMsg: Message,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Message + VariantPermission,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()