import wit

access_token = 'XXTCILHEL7DGNCQ2V4VLQ62PMPW3IV57'
wit.init()
response = wit.voice_query_auto(access_token)
print 'Response: {}'.format(response)
wit.close()