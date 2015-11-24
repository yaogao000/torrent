<!DOCTYPE html>
<html>
<head>  
    <title>Project-Home</title>
    <?php require PAGE_PATH . '/layout/header.php' ?>
    <script src="<?php echo ASSETS_PATH; ?>/js/lib/require.js" data-main="<?php echo ASSETS_PATH; ?>/js/main" data-start="app/index"></script>
</head>
<body>
	<h1>Hello, My project！</h1>
    <table class="table">
      <caption>member_list.</caption>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>high</th>
        </tr>
      </thead>
      <tbody id="member_list">
        
      </tbody>
    </table>
    <?php require PAGE_PATH . '/layout/footer.php' ?>
    <script type="text/html" id="member-item">
        {{each data as item}}
            <tr>
                <th>{{item.id}}</th>
                <th>{{item.name}}</th>
                <th>{{item.age}}</th>
                <th>{{item.high}}</th>
            </tr>
        {{/each}}
    </script>
</body>
</html>