require('dotenv').config({ path: './env' })
require('dotenv').config({ path: './config.env' })
const fs = require('fs')
const path = require('path')

const webConfigContents = `<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <appSettings>
        <add key="virtualDirPath" value="${process.env.VIRTUAL_PATH}/v${process.env.VERSION_NO}" />
    </appSettings>
    <system.webServer>
        <handlers>
            <add name="iisnode" path="${process.env.ROOT_FILE_NAME}" verb="*" modules="iisnode" />
        </handlers>
        <rewrite>
            <rules>
                <rule name="nodejs">
                    <match url="(.*)" />
                        <conditions>
                            <add input="{REQUEST_FILENAME}" pattern="" />
                        </conditions>
                    <action type="Rewrite" url="${process.env.ROOT_FILE_NAME}" />
                </rule>
            </rules>
        </rewrite> 
        <security>
            <requestFiltering>
                <hiddenSegments>
                    <add segment="node_modules" />
                    <add segment="iisnode" />
                </hiddenSegments>
            </requestFiltering>
        </security>
        <iisnode 
            node_env="%node_env%" 
            nodeProcessCountPerApplication="1" 
            maxConcurrentRequestsPerProcess="1024" 
            maxNamedPipeConnectionRetry="100" 
            namedPipeConnectionRetryDelay="250" 
            maxNamedPipeConnectionPoolSize="512" 
            maxNamedPipePooledConnectionAge="30000" 
            asyncCompletionThreadCount="0" 
            initialRequestBufferSize="4096" 
            maxRequestBufferSize="65536"
            watchedFiles="*.js;iisnode.yml" 
            uncFileChangesPollingInterval="5000" 
            gracefulShutdownTimeout="60000" 
            loggingEnabled="true" 
            logDirectory="iisnode" 
            debuggingEnabled="true" 
            debugHeaderEnabled="false" 
            debuggerPortRange="5058-6058" 
            debuggerPathSegment="debug"
            maxLogFileSizeInKB="128"
            maxTotalLogFileSizeInKB="1024" 
            maxLogFiles="20" 
            devErrorsEnabled="true" 
            flushResponse="false" 
            enableXFF="false" 
            promoteServerVars="" 
            configOverrides="iisnode.yml" />
    </system.webServer>
</configuration>`


const GenerateWebConfig = () => {
    // Making web.config file
    fs.writeFile('./web.config', webConfigContents, 'utf8', (err) => {
        if (err) return console.log(err)
    })
}

const SequelizeMssqlCodeReplace = () => {
    const fileDir = path.join(__dirname, '/node_modules/sequelize/lib/dialects/mssql/query-generator.js')

    const file = fs.readFileSync(fileDir, 'utf8')

    const fileArray = file.toString().replace(/\r\n/g, '\n').split("\n") // Byte->string->replace end char to new line->making array by spliting new line

    // Replacing the 818 no line with below two lines of code (Original file line number - 1)
    fileArray[818] = "    let cleanIdentifier = identifier.replace(/[[\]']+/g, '');" +
        "\n    return cleanIdentifier.endsWith('.dbo') ? cleanIdentifier.split('.').map(part => `[${ part }]`).join('.') : `[${ cleanIdentifier }]`;"

    // Writing file as a sting (.join('n')) automatically creates array to string
    fs.writeFile(fileDir, fileArray.join('\n'), 'utf8', (err) => {
        if (err) return console.log(err)
    })
}


GenerateWebConfig()
SequelizeMssqlCodeReplace()