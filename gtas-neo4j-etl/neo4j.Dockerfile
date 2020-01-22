FROM neo4j
ENV NEO4j_AUTH=neo4j/admin
ENV NEO4J_dbms_active__dabase=gtas_db
ENV NEO4J_dmbs_security_auth__enabled=true
ENV NEO4j_dmbs_connectors_default__advertised__address=localhost
ENV NEO4J_dmbs_connector_bold_listen__address=:7687
ENV NEO4J_dmbs_connector_http_listen__address=:7474