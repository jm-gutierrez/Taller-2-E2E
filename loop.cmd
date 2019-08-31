ECHO  ---------- INICIANDO PROCESO ------------

FOR /L %%G IN (1,1,20) DO  .\node_modules\.bin\cypress run --spec "cypress\integration\simple_spec.js"
PAUSE

ECHO  ---------- PROCESO FINALIZADO -----------
